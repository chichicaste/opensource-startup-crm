<script>
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();

	/** @param {string | Date} dateString */
	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};
</script>

<div class="p-6">
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-gray-900">Contact Submissions</h1>
	</div>

	{#if data.contacts && data.contacts.length > 0}
		<div class="overflow-x-auto rounded-lg bg-white shadow-lg">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Contact Info
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Reason
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Message
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Submitted
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						>
							Tracking
						</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each data.contacts as contact}
						<tr class="transition-colors hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap">
								<div class="flex flex-col">
									<div class="text-sm font-medium text-gray-900">{contact.name}</div>
									<div class="text-sm text-gray-500">{contact.email}</div>
								</div>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span
									class="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800"
								>
									{contact.reason}
								</span>
							</td>
							<td class="px-6 py-4">
								<div class="max-w-md text-sm break-words whitespace-pre-wrap text-gray-900">
									{contact.message}
								</div>
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{formatDate(contact.createdAt)}
							</td>
							<td class="px-6 py-4">
								<div class="space-y-1 text-xs text-gray-500">
									{#if contact.ipAddress}
										<div>IP: {contact.ipAddress}</div>
									{/if}
									{#if contact.referrer}
										<div class="max-w-32 truncate" title={contact.referrer}>
											Ref: {contact.referrer}
										</div>
									{/if}
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="mt-4 text-sm text-gray-600">
			Total submissions: {data.contacts.length}
		</div>
	{:else}
		<div class="py-12 text-center">
			<div class="mx-auto h-12 w-12 text-gray-400">
				<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-5m-7 0h5"
					/>
				</svg>
			</div>
			<h3 class="mt-2 text-sm font-medium text-gray-900">No contact submissions</h3>
			<p class="mt-1 text-sm text-gray-500">No contact form requests have been submitted yet.</p>
		</div>
	{/if}
</div>
