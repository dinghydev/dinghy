import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMR_ENGINE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.emr_engine;fillColor=#F58534;gradientColor=none;',
  },
  _width: 82.5,
  _height: 60,
}

export function EmrEngine(props: DiagramNodeProps) {
  return (
    <Shape {...EMR_ENGINE} {...props} _style={extendStyle(EMR_ENGINE, props)} />
  )
}
