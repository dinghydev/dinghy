import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURITY_GROUP = {
  _style: {
    container:
      'fillColor=none;strokeColor=#DD3522;verticalAlign=top;fontStyle=0;fontColor=#DD3522;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#DD3522',
      fontColor: '#DD3522',
    },
  },
}

export function SecurityGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_GROUP}
      {...props}
      _style={extendStyle(SECURITY_GROUP, props)}
    />
  )
}
