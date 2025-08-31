import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SECURITY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_security',
  },
  _width: 100,
  _height: 70,
}

export function CloudSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SECURITY}
      {...props}
      _style={extendStyle(CLOUD_SECURITY, props)}
    />
  )
}
