import { type DiagramNodeProps, Rows, Shape } from '@reactiac/base-components'

type ParticipantProps = {
  _width: number
  _height: number
  lifelineHeight: number
  paddingX: number
  paddingY: number
  icon?: React.ComponentType<any>
  children?: React.ReactNode
} & DiagramNodeProps

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
  const dashedLineHeight =
    (hasIcon ? lifelineHeight : lifelineHeight + paddingY * 2) +
    paddingY
  return (
    <Rows>
      <Icon
        _diagram={{
          dimension: {
            margin: {
              left: paddingX / 2,
              right: paddingX / 2,
              bottom: hasIcon ? paddingY : 0,
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
              top: hasIcon ? paddingY : 0,
            },
          },
        }}
        title=' '
      />
      <Rows
        _x={paddingX / 2 + props._width / 2}
        _y={paddingY * 4 + props._height}
      >
        {children}
      </Rows>
    </Rows>
  )
}
