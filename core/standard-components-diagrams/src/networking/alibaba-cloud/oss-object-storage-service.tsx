import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OSS_OBJECT_STORAGE_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.oss_object_storage_service;',
  },
  _original_width: 50.699999999999996,
  _original_height: 38.7,
}

export function OssObjectStorageService(props: DiagramNodeProps) {
  return (
    <Shape
      {...OSS_OBJECT_STORAGE_SERVICE}
      {...props}
      _style={extendStyle(OSS_OBJECT_STORAGE_SERVICE, props)}
    />
  )
}
