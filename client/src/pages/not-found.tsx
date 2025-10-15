import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import HashLink from "@/components/HashLink";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 pb-8">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Página no encontrada</h1>
          </div>

          <p className="mt-4 mb-6 text-sm text-gray-600">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>
          
          <a 
            href="https://preparaomegrx.es/" 
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors w-fit"
          >
            <Home size={16} />
            Volver a la página principal
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
