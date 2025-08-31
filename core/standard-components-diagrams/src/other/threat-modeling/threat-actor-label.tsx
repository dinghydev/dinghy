import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THREAT_ACTOR_LABEL = {
  _style: {
    entity:
      'text;html=1;strokeColor=#b85450;fillColor=#f8cecc;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _width: 40,
  _height: 20,
}

export function ThreatActorLabel(props: DiagramNodeProps) {
  return (
    <Shape
      {...THREAT_ACTOR_LABEL}
      {...props}
      _style={extendStyle(THREAT_ACTOR_LABEL, props)}
    />
  )
}
