import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_TASKS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Tasks.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function StorageTasks(props: DiagramNodeProps) {
  return <Shape {...STORAGE_TASKS} {...props} />
}
