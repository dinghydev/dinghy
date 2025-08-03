import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_ACTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Actions.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function StorageActions(props: DiagramNodeProps) {
  return <Shape {...STORAGE_ACTIONS} {...props} />
}
