import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATAVERSE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/Dataverse.svg;strokeColor=none;',
  _width: 68,
  _height: 52.400000000000006,
}

export function Dataverse(props: DiagramNodeProps) {
  return (
    <Shape {...DATAVERSE} {...props} _style={extendStyle(DATAVERSE, props)} />
  )
}
