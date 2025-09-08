import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const THIN_CLIENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.thin_client;',
  },
  _original_width: 71,
  _original_height: 71,
}

export function ThinClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...THIN_CLIENT}
      {...props}
      _style={extendStyle(THIN_CLIENT, props)}
    />
  )
}
