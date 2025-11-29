import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_CONTROL_TABLE = {
  _style: {
    container:
      'shape=table;startSize=30;container=1;collapsible=0;childLayout=tableLayout;fillColor=#d5e8d4;strokeColor=#82b366;fontStyle=1;swimlaneFillColor=#FFFFFF;fontColor=#000000;whiteSpace=wrap;html=1;',
    entity: {
      strokeColor: '#82b366',
      fillColor: '#d5e8d4',
      fontColor: '#000000',
    },
  },
}

export function SecurityControlTable(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SECURITY_CONTROL_TABLE)} />
  )
}
