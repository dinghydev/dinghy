import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKFLOW = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Workflow.svg;',
  _width: 68,
  _height: 70,
}

export function Workflow(props: DiagramNodeProps) {
  return <Shape {...WORKFLOW} {...props} />
}
