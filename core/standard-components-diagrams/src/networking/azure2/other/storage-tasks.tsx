import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_TASKS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Tasks.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function StorageTasks(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_TASKS}
      {...props}
      _style={extendStyle(STORAGE_TASKS, props)}
    />
  )
}
