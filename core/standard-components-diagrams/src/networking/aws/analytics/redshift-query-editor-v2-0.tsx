import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REDSHIFT_QUERY_EDITOR_V2_0 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.redshift_query_editor_v20_light;',
  _width: 78,
  _height: 78,
}

export function RedshiftQueryEditorV20(props: DiagramNodeProps) {
  return <Shape {...REDSHIFT_QUERY_EDITOR_V2_0} {...props} />
}
