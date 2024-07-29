import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
      <header className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">AntWorld</h1>
          <p className="mt-2">Discover the Fascinating World of Ants</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to AntWorld</h2>
          <p className="text-lg mb-4">
            Explore the incredible universe of ants, nature's tiny engineers and
            master collaborators. Learn about their complex societies, amazing
            strength, and crucial role in ecosystems.
          </p>
          <Button size="lg">Learn More About Ants</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ant Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FactCard
              title="Species"
              description="There are over 12,000 known species of ants worldwide."
            />
            <FactCard
              icon={<Leaf className="h-6 w-6" />}
              title="Leaf Cutter Ants"
              description="Can carry up to 50 times their own body weight."
            />
            <FactCard
              icon={<Users className="h-6 w-6" />}
              title="Colony Size"
              description="Some ant colonies can have millions of individuals."
            />
            <FactCard
              icon={<Zap className="h-6 w-6" />}
              title="Lifespan"
              description="Queen ants can live for several decades in some species."
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ant Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/placeholder.svg" alt="Ant carrying leaf" className="mx-auto object-cover w-full h-[200px] rounded-lg shadow-md" />
            <img src="/placeholder.svg" alt="Ant colony" className="mx-auto object-cover w-full h-[200px] rounded-lg shadow-md" />
            <img src="/placeholder.svg" alt="Close-up of an ant" className="mx-auto object-cover w-full h-[200px] rounded-lg shadow-md" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Ant-thusiast Community</h2>
          <p className="mb-4">
            Sign up for our newsletter to receive fascinating ant facts, research updates, and more!
          </p>
          <Button variant="outline">Subscribe Now</Button>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AntWorld. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Index;
