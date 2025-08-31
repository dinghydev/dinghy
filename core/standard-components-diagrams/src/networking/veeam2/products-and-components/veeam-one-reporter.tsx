import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_ONE_REPORTER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_one_reporter;',
  _width: 34,
  _height: 34,
}

export function VeeamOneReporter(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_ONE_REPORTER}
      {...props}
      _style={extendStyle(VEEAM_ONE_REPORTER, props)}
    />
  )
}
