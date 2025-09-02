import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESIGNATE_RECORDSET = {
  _style: {
    entity:
      'fillColor=#808080;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.designate_recordset;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DesignateRecordset(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESIGNATE_RECORDSET}
      {...props}
      _style={extendStyle(DESIGNATE_RECORDSET, props)}
    />
  )
}
