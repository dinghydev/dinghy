import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANALYSIS_CORRELATION = {
  _style: {
    entity:
      'fillColor=#28A8E0;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.analysis_correlation;',
  },
  _width: 43,
  _height: 43,
}

export function AnalysisCorrelation(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANALYSIS_CORRELATION}
      {...props}
      _style={extendStyle(ANALYSIS_CORRELATION, props)}
    />
  )
}
