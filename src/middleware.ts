import { type MiddlewareHandler } from 'astro'
import { defineMiddleware } from 'astro:middleware'

// export const config = {
//   matcher: ['/form', '/thanks', '/promotions/:path*'],
// }

const targetPaths = ['/form', '/thanks', '/promotions'] as const

const brandByHost: Record<string, string> = {
  [import.meta.env.PUBLIC_MY_VISION_FORM_HOST as string]: 'my_vision',
  [import.meta.env.PUBLIC_BUILD_JOB_FORM_HOST as string]: 'build_job',
  [import.meta.env.PUBLIC_TECH_GO_FORM_HOST as string]: 'tech_go',
  [import.meta.env.PUBLIC_TWIN_PRO_FORM_HOST as string]: 'twin_pro',
  [import.meta.env.PUBLIC_MAKERS_JOB_FORM_HOST as string]: 'makers_job',
  [import.meta.env.PUBLIC_BEST_WIN_FORM_HOST as string]: 'best_win',
}

/**
 * apps/form 環境では、2種類のURLでアクセスされる
 *
 * - 検証用のURL・ビルドURL
 *   - パスパラメータにブランド名が含まれる
 *   - 例
 *     - http://localhost:4005/{brand}/form
 *     - https://staging.form.my-vision.co.jp/{brand}/form
 *     - https://form.my-vision.co.jp/{brand}/form
 *     - https://form.my-vision.co.jp/{brand}/thanks
 *     - https://form.my-vision.co.jp/{brand}/promotions/{promotionId}
 * - 本番用のURL
 *   - ブランドごとにドメインが分かれている
 *   - VercelのEdgeMiddleware上で対応するビルドURLにリライトされる
 *   - 例
 *     - https://form.my-vision.co.jp/form
 *       - -> https://form.my-vision.co.jp/my_vision/form (リライト先)
 *     - https://form.build-job.jp/form
 *       - -> https://form.my-vision.co.jp/build_job/form
 *     - https://form.tech-go.jp/thanks
 *       - -> https://form.my-vision.co.jp/tech_go/thanks
 *     - https://form.makers-job.jp/promotions/xxx-xxx-xxx
 *       - -> https://form.my-vision.co.jp/makers_job/promotions/xxx-xxx-xxx
 */

/* eslint-disable no-console */
export const onRequest: MiddlewareHandler = defineMiddleware(
  (context, next) => {
    const url = new URL(context.request.url)

    console.log('env mv_form_host:', import.meta.env.PUBLIC_MY_VISION_FORM_HOST)
    console.log('env bj_form_host:', import.meta.env.PUBLIC_BUILD_JOB_FORM_HOST)
    console.log('env tg_form_host:', import.meta.env.PUBLIC_TECH_GO_FORM_HOST)
    console.log('env tp_form_host:', import.meta.env.PUBLIC_TWIN_PRO_FORM_HOST)
    console.log(
      'env mj_form_host:',
      import.meta.env.PUBLIC_MAKERS_JOB_FORM_HOST
    )
    console.log('env bw_form_host:', import.meta.env.PUBLIC_BEST_WIN_FORM_HOST)

    // // 処理対象のパスかどうかを確認
    // const isTargetPath = targetPaths.some((path) =>
    //   url.pathname.startsWith(path)
    // )

    // if (!isTargetPath) {
    //   console.log('middleware skipped for path:', url.pathname)
    //   return next()
    // }

    // if (!brandByHost[url.origin]) {
    //   console.log('No brand found for the current host')
    //   return next()
    // }

    // const rewritePath = `/${brandByHost[url.origin]}${url.pathname}`
    // return context.rewrite(new URL(rewritePath, context.request.url))
    console.log('on middleware', context.request.url)

    return next()
  }
)
