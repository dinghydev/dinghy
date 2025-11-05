import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORAGE_TASKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Tasks.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function StorageTasks(props: NodeProps) {
  return (
    <Shape
      {...STORAGE_TASKS}
      {...props}
      _style={extendStyle(STORAGE_TASKS, props)}
    />
  )
}
