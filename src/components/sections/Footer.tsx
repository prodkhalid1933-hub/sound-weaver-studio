export const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container text-center">
      <p className="text-sm text-muted-foreground">
        <span className="text-gradient font-heading font-semibold">Producer</span>
        {" · "}Composer{" · "}Artist
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} prodkhalid. All rights reserved.
      </p>
    </div>
  </footer>
);
