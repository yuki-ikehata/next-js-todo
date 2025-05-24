"use client";
import React from "react";

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className="bg-red-100 border-1-4 border-red-500 text-red-700 px-4 py-3 my-4 rounded shadow-md mx-auto">
            <h3 className="font-bold mb-2">エラーが発生しました</h3>
            <button
                onClick={() => reset()}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300">もう一度試す</button>
        </div>
    )
}