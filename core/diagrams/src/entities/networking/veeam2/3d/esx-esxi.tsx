import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ESX_ESXI = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.esx_esxi;',
  },
  _width: 38,
  _height: 52,
}

export function EsxEsxi(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ESX_ESXI)} />
}
