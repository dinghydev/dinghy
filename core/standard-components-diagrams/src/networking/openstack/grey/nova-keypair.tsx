import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NOVA_KEYPAIR = {
  _style: {
    entity:
      'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.nova_keypair;',
  },
  _width: 60,
  _height: 60,
}

export function NovaKeypair(props: DiagramNodeProps) {
  return (
    <Shape
      {...NOVA_KEYPAIR}
      {...props}
      _style={extendStyle(NOVA_KEYPAIR, props)}
    />
  )
}
