import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMR_ENGINE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.emr_engine;',
  _width: 78,
  _height: 59,
}

export function EmrEngine(props: DiagramNodeProps) {
  return (
    <Shape {...EMR_ENGINE} {...props} _style={extendStyle(EMR_ENGINE, props)} />
  )
}
