import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REPORT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.report;',
  },
  _original_width: 28.000000000000004,
  _original_height: 39,
}

export function Report(props: DiagramNodeProps) {
  return <Shape {...REPORT} {...props} _style={extendStyle(REPORT, props)} />
}
