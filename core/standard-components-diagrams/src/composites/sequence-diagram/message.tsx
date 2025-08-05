import { Dependency, DiagramNodeProps } from '@reactiac/base-components'

type Point = {
  x: number
  y: number
}

export type MessageProps = {
  source: Point
  target: Point
  paddingX: number
  dashed?: boolean
  message?: string
} & DiagramNodeProps

export function Message(
  { source, target, dashed, paddingX, ...props }: MessageProps,
) {
  const points = [
    { as: 'sourcePoint', ...source },
    { as: 'targetPoint', ...target },
  ]
  if (source.x === target.x) {
    points.push({ x: source.x + paddingX, y: source.y } as any)
    points.push({ x: source.x + paddingX, y: target.y } as any)
  }
  return (
    <Dependency
      title={props.message || ' '}
      {...props}
      _style={{
        dependency: dashed ? 'dashed=1;' : undefined,
      }}
      _diagram={{ points }}
    />
  )
}
