import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTI_CA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.identi.ca',
  },
  _width: 74.2,
  _height: 47.6,
}

export function IdentiCa(props: NodeProps) {
  return (
    <Shape {...IDENTI_CA} {...props} _style={extendStyle(IDENTI_CA, props)} />
  )
}
