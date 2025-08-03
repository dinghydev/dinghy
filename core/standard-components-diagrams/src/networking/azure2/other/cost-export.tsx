import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COST_EXPORT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Cost_Export.svg;strokeColor=none;',
  _width: 68,
  _height: 52.72,
}

export function CostExport(props: DiagramNodeProps) {
  return <Shape {...COST_EXPORT} {...props} />
}
