import { NodeProps, Shape } from '@dinghy/base-components'

export type FrameProps = {
  _width: number
  _height: number
  _x: number
  _y: number
  _padding: number
  title?: string
}

export function Frame(
  { title, _padding, ...props }: FrameProps & NodeProps,
) {
  const titleWidth = (title?.length || 5) * 6 + _padding
  return (
    <Shape
      title={title}
      _style={`shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;width=${titleWidth};`}
      {...props}
    />
  )
}
