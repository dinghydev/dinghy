import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ESXI_HOST = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.esxi_host;',
  },
  _original_width: 82,
  _original_height: 79,
}

export function EsxiHost(props: DiagramNodeProps) {
  return (
    <Shape {...ESXI_HOST} {...props} _style={extendStyle(ESXI_HOST, props)} />
  )
}
