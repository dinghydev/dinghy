import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES = {
  _style: {
    group:
      'fontStyle=0;verticalAlign=top;align=center;spacingTop=-2;fillColor=none;rounded=0;whiteSpace=wrap;html=1;strokeColor=#4376BB;strokeWidth=1;dashed=0;container=1;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#4376BB',
    },
  },
}

export function CloudServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES}
      {...props}
      _style={extendStyle(CLOUD_SERVICES, props)}
    />
  )
}
