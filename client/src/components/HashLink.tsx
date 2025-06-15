import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HashLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const scrollToTop = () => {
  let attempts = 10;

  const tryScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    attempts--;
    if (attempts > 0) {
      // Check if scroll actually happened
      if (window.scrollY === 0) {
        // Scroll succeeded, stop trying
        return;
      }
      // Retry after next frame
      requestAnimationFrame(tryScrollTop);
    }
  };

  tryScrollTop();
};

const HashLink = ({ to, children, className, onClick }: HashLinkProps) => {
  const navigate = useNavigate();

  // Helper: wait for element to exist before scrolling
  const scrollToHash = (hash: string) => {
    if (!hash || hash === 'top') {
      scrollToTop();
      return;
    }

    const tryScroll = (attemptsLeft: number) => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attemptsLeft > 0) {
        // Retry after next animation frame, max 10 times (~160ms)
        requestAnimationFrame(() => tryScroll(attemptsLeft - 1));
      }
      // else give up if element never appears
    };

    tryScroll(10);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    navigate(to);

    // Extract hash from to
    const [, hash] = to.split('#');
    console.log(to);
    console.log(hash);

    // Wait a frame before attempting to scroll
    requestAnimationFrame(() => {
      scrollToHash(hash || '');
    });
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default HashLink;
