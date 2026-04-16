import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            <span className="text-2xl font-bold">🦞</span>
            <span className="text-2xl font-bold">OpenClaw</span>
            <span className="text-xl">+</span>
            <span className="text-2xl font-bold">Next.js</span>
            <span className="text-xl">+</span>
            <span className="text-2xl font-bold">Vercel</span>
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center mt-12">
        <div className="relative flex flex-col gap-8">
          <h1 className="text-5xl font-bold text-center">
            Agent-Native Web Development
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 max-w-3xl">
            This demo shows how OpenClaw agents can deploy, monitor, and update Next.js applications on Vercel.
            Built and deployed automatically by AI agents.
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-16 gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            OpenClaw Agents{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            AI agents manage the full development lifecycle from code to deployment.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Next.js Framework{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Modern React framework with server-side rendering and optimal performance.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Vercel Hosting{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Global CDN, automatic SSL, and instant deployments from GitHub.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Repository: <Link href="https://github.com/Stroophy/openclaw-nextjs-demo" className="underline">github.com/Stroophy/openclaw-nextjs-demo</Link>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Deployed automatically by OpenClaw agents
        </p>
      </div>
    </main>
  )
}
