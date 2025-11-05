import { type NodeProps, Rows, Shape } from '@dinghy/base-components'
import { defaultDiagramOptions } from '@dinghy/renderer-drawio'

type ParticipantProps = {
  _width: number
  _height: number
  lifelineHeight: number
  paddingX: number
  paddingY: number
  icon?: React.ComponentType<any>
  children?: React.ReactNode
} & NodeProps

export function Participant(
  {
    icon,
    children,
    lifelineHeight,
    paddingY,
    paddingX,
    ...props
  }: ParticipantProps,
) {
  const hasIcon = !!icon
  const Icon = icon || Shape
  const dashedLineHeight = hasIcon
    ? lifelineHeight
    : lifelineHeight + defaultDiagramOptions.dimension.textHeight + paddingY / 2
  return (
    <Rows>
      <Icon
        _diagram={{
          dimension: {
            margin: {
              left: paddingX / 2,
              right: paddingX / 2,
              bottom: hasIcon ? paddingY / 2 : 0,
            },
          },
        }}
        {...props}
      />
      <Shape
        _style='line;strokeWidth=1;direction=south;html=1;dashed=1;'
        _height={dashedLineHeight}
        _diagram={{
          dimension: {
            margin: {
              top: 0,
            },
          },
        }}
        title=' '
      />
      <Rows
        _x={paddingX / 2 + props._width / 2}
        _y={paddingY * 3 + props._height}
      >
        {children}
      </Rows>
    </Rows>
  )
}
