import { z } from 'zod'
const BucketPermissionEnum = z.enum(['readonly', 'readwrite', 'admin'])

export const RolePolicySchema = z.union([
  z.object({
    name: z.string(),
  }).loose(),
  z.object({
    permission: BucketPermissionEnum,
    buckets: z.string().array(),
  }).loose(),
  z.object({
    permission: BucketPermissionEnum,
    bucket: z.string(),
  }).loose(),
  z.object({
    actions: z.string().array(),
    resource: z.string().optional(),
    resources: z.string().array().optional(),
  }).loose(),
  z.object({
    action: z.string(),
    resource: z.string().optional(),
    resources: z.string().array().optional(),
  }).loose(),
  z.object({
    resource: z.string(),
  }).loose(),
  z.object({
    resources: z.string().array(),
  }).loose(),
  z.object({
    Action: z.string().array(),
  }).loose(),
])
export type RolePolicyType = z.infer<typeof RolePolicySchema>
export const RolesPolicySchema = z.record(z.string(), RolePolicySchema.array())
