import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANGE_ANALYSIS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/devops/Change_Analysis.svg;',
  _width: 68,
  _height: 67.67999999999999,
}

export function ChangeAnalysis(props: DiagramNodeProps) {
  return <Shape {...CHANGE_ANALYSIS} {...props} />
}
