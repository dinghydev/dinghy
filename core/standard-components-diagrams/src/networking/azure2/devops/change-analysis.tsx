import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_ANALYSIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Change_Analysis.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67.67999999999999,
}

export function ChangeAnalysis(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_ANALYSIS}
      {...props}
      _style={extendStyle(CHANGE_ANALYSIS, props)}
    />
  )
}
