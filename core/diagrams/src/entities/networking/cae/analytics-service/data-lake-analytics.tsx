import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_LAKE_ANALYTICS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake_Analytics.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DataLakeAnalytics(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_LAKE_ANALYTICS)} />
}
