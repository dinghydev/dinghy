import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FEDERATION_SERVICES_PROXY = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.d',
  },
  _width: 40,
  _height: 50,
}

export function FederationServicesProxy(props: DiagramNodeProps) {
  return (
    <Shape
      {...FEDERATION_SERVICES_PROXY}
      {...props}
      _style={extendStyle(FEDERATION_SERVICES_PROXY, props)}
    />
  )
}
