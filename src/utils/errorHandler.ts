// utils/errorHandler.ts

// Define a type for the Firestore error object
interface FirestoreError extends Error {
    code?: string; // Optional because not all errors may have a code
}

export function handleFirestoreError(error: FirestoreError) {
    if (!error) return;

    let errorMessage = "An unexpected error occurred.";

    if (error.code) {
        if (error.code === 'permission-denied') {
            errorMessage = "Permission denied. Please check your Firestore security rules.";
        } else if (error.code === 'not-found') {
            errorMessage = "Resource not found. Please ensure the collection or document exists.";
        } else if (error.code === 'unavailable') {
            errorMessage = "Firestore service is currently unavailable. Please try again later.";
        } else if (error.code === 'unauthenticated') {
            errorMessage = "User not authenticated. Please sign in to access data.";
        } else if (error.code === 'cancelled') {
            errorMessage = "Request was cancelled. Please try again.";
        } else if (error.code === 'deadline-exceeded') {
            errorMessage = "Request took too long to complete. Please try again.";
        } else {
            errorMessage = `Firestore Error: ${error.message || error.code}`;
        }
    } else {
        errorMessage = `Unknown Error: ${error.message || JSON.stringify(error)}`;
    }

    console.error(errorMessage);
    return errorMessage;
}
