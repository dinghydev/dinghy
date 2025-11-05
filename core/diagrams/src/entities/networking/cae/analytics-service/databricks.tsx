import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABRICKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Databricks.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Databricks(props: NodeProps) {
  return (
    <Shape {...DATABRICKS} {...props} _style={extendStyle(DATABRICKS, props)} />
  )
}
