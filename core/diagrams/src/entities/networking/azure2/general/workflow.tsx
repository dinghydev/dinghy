import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKFLOW = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Workflow.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 70,
}

export function Workflow(props: DiagramNodeProps) {
  return (
    <Shape {...WORKFLOW} {...props} _style={extendStyle(WORKFLOW, props)} />
  )
}
