import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ESX_ESXI = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.esx_esxi;',
  },
  _width: 38,
  _height: 52,
}

export function EsxEsxi(props: DiagramNodeProps) {
  return (
    <Shape {...ESX_ESXI} {...props} _style={extendStyle(ESX_ESXI, props)} />
  )
}
