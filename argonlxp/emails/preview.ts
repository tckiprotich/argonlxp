import WaitlistConfirmationEmail from "./WaitlistConfirmation";

// Email previews for development
export const emailPreviews = [
  {
    name: "WaitlistConfirmation",
    component: WaitlistConfirmationEmail({
      name: "Sarah Johnson",
      organization: "Acme Inc.",
    }),
  },
];

// Create a safer way to start the preview server
const startEmailPreview = async () => {
  if (process.env.NODE_ENV === "development") {
    try {
      // Use dynamic import to avoid build-time issues
      const { PreviewEmail } = await import("react-email");
      if (typeof PreviewEmail?.start === 'function') {
        PreviewEmail.start();
      }
    } catch (error) {
      console.warn("React Email preview server couldn't be started:", error);
    }
  }
};

// Only run in client context to avoid build errors
if (typeof window !== 'undefined') {
  startEmailPreview().catch(console.error);
}
