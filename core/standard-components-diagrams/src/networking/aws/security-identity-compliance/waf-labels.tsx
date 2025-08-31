import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAF_LABELS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.waf_labels;',
  },
  _width: 60,
  _height: 60,
}

export function WafLabels(props: DiagramNodeProps) {
  return (
    <Shape {...WAF_LABELS} {...props} _style={extendStyle(WAF_LABELS, props)} />
  )
}
