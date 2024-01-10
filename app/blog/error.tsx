"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
    return <h1 style={{ color: "red" }}>Ooops!!! {error.message}</h1>;
}
