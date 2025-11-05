import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_ANALYSIS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Change_Analysis.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 67.67999999999999,
}

export function ChangeAnalysis(props: NodeProps) {
  return (
    <Shape
      {...CHANGE_ANALYSIS}
      {...props}
      _style={extendStyle(CHANGE_ANALYSIS, props)}
    />
  )
}
