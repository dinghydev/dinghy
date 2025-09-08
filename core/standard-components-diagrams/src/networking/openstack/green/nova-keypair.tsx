import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NOVA_KEYPAIR = {
  _style: {
    entity:
      'fillColor=#008000;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.nova_keypair;',
  },
  _original_width: 50,
  _original_height: 50,
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
