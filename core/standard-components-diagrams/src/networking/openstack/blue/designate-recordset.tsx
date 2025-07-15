import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESIGNATE_RECORDSET = {
  _style:
    'fillColor=#3F51B5;aspect=fixed;sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.openstack.designate_recordset;',
  _width: 50,
  _height: 50,
}

export function DesignateRecordset(props: DiagramNodeProps) {
  return <Shape {...DESIGNATE_RECORDSET} {...props} />
}
