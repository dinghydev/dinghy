import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTERNAL_NETWORKS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.external_networks;',
  },
  _width: 50,
  _height: 35,
}

export function ExternalNetworks(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_NETWORKS}
      {...props}
      _style={extendStyle(EXTERNAL_NETWORKS, props)}
    />
  )
}
