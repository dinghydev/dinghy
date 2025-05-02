import type {
  DrawioContext,
  DrawioNodeProps,
  DrawioNodeTree,
  DrawioRenderOptions,
} from '../types.ts'

function resolve(
  _props: DrawioNodeProps,
  options: DrawioRenderOptions,
  selectedView: string,
) {
  const _viewAttributes = _props._viewAttributes?.[selectedView]
  if (_viewAttributes) {
    Object.assign(_props, _viewAttributes)
  }

  _props._node._children.map((c: DrawioNodeTree) =>
    resolve(c._props, options, selectedView)
  )
}

export const p10ApplyViewAttributes = ({
  rootNode,
  renderOptions,
}: DrawioContext) => {
  const selectedView = (renderOptions as any).view?.name
  resolve(rootNode._props, renderOptions, selectedView)
}
